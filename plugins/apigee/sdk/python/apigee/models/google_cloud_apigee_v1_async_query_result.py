from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1AsyncQueryResult(SdkBaseModel):
    self: Optional[str] = UNSET
    """Self link of the query results. Example:
    ``/organizations/myorg/environments/myenv/queries/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd/result`` or following format
    if query is running at host level:
    ``/organizations/myorg/hostQueries/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd/result``"""

    expires: Optional[str] = UNSET
    """Query result will be unaccessable after this time."""


class GoogleCloudApigeeV1AsyncQueryResultDict(TypedDict):
    self: NotRequired[str]
    expires: NotRequired[str]
