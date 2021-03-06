/****************************************************************************************
 * Copyright (C) 2011 Lucien XU <sfietkonstantin@free.fr>                               *
 *                                                                                      *
 * This program is free software; you can redistribute it and/or modify it under        *
 * the terms of the GNU General Public License as published by the Free Software        *
 * Foundation; either version 3 of the License, or (at your option) any later           *
 * version.                                                                             *
 *                                                                                      *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY      *
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A      *
 * PARTICULAR PURPOSE. See the GNU General Public License for more details.             *
 *                                                                                      *
 * You should have received a copy of the GNU General Public License along with         *
 * this program.  If not, see <http://www.gnu.org/licenses/>.                           *
 ****************************************************************************************/

import QtQuick 1.1
import com.nokia.meego 1.0
import "../UiConstants.js" as Ui

Item {
    id: container
    property bool loading: false
    property real margins: Ui.MARGIN_DEFAULT
    height: loading ? Ui.LIST_ITEM_HEIGHT_DEFAULT + 2 * margins : margins
    Row {
        anchors.centerIn: parent
        visible: loading
        spacing: Ui.MARGIN_DEFAULT

        BusyIndicator {
            running: parent.visible
        }

        Label {
            text: qsTr("Loading")
        }
    }
}
