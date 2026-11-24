from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .value_uipath_users_api import ValueUipathUsersApi, ValueUipathUsersApiDict


class ODataUserCollection(SdkBaseModel):
    """OData collection response containing users"""

    value: Optional[list[ValueUipathUsersApi]] = UNSET


class ODataUserCollectionDict(TypedDict):
    value: NotRequired[list[ValueUipathUsersApiDict]]
