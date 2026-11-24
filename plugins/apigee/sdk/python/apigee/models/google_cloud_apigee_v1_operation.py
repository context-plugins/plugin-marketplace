from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1Operation(SdkBaseModel):
    """Represents the pairing of REST resource path and the actions (verbs) allowed on the resource path."""

    resource: Optional[str] = UNSET
    """Required. REST resource path associated with the API proxy or remote service."""

    methods: Optional[list[str]] = UNSET
    """methods refers to the REST verbs as in https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html. When none
    specified, all verb types are allowed."""


class GoogleCloudApigeeV1OperationDict(TypedDict):
    resource: NotRequired[str]
    methods: NotRequired[list[str]]
