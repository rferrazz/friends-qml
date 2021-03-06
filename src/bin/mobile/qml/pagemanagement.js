/****************************************************************************************
 * Copyright (C) 2012 Lucien XU <sfietkonstantin@free.fr>                               *
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

function addPage(name, properties, callLoad) {
    var newPage = window.pageStack.push(Qt.resolvedUrl(name), properties)
    if (callLoad) {
        newPage.load()
    }
}

function showPhotoViewer(model, index) {
    var newPage = window.pageStack.push(Qt.resolvedUrl("PhotoViewerPage.qml", {}))
    newPage.model = model
    newPage.setPosition(index)
}

function popFromPhotoViewer(index) {
    window.pageStack.pop()

    var photoListPage = window.pageStack.currentPage
    photoListPage.repositionView(index)
}

//function showFeedDialog(facebookId) {
//    _feed_dialog_.to = facebookId
//    _feed_dialog_.showDialog()
//}

//function resolveType(facebookId, name) {
//    _type_resolver_.resolvedName = name
//    _type_resolver_.request(facebookId)
//}

function openWebBrowser(url) {
    Qt.openUrlExternally(url)
    _launching_web_browser_info_banner_.parent = _window_.pageStack.currentPage
    _launching_web_browser_info_banner_.show()
}
