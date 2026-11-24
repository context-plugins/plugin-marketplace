from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1ResourceConfig(SdkBaseModel):
    name: Optional[str] = UNSET
    """Resource name in the following format:
    ``organizations/{org}/environments/{env}/resourcefiles/{type}/{file}/revisions/{rev}`` Only environment-scoped
    resource files are supported."""

    location: Optional[str] = UNSET
    """Location of the resource as a URI."""


class GoogleCloudApigeeV1ResourceConfigDict(TypedDict):
    name: NotRequired[str]
    location: NotRequired[str]
