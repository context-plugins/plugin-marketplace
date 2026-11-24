from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1ProfileConfigCategory(SdkBaseModel):
    """Advanced API Security provides security profile that scores the following categories."""

    mediation: Optional[Any] = UNSET
    """Checks to see if you have a mediation policy in place."""

    mtls: Optional[Any] = UNSET
    """Checks to see if you have configured mTLS for the target server."""

    cors: Optional[Any] = UNSET
    """Checks to see if you have CORS policy in place."""

    threat: Optional[Any] = UNSET
    """Checks to see if you have a threat protection policy in place."""

    abuse: Optional[Any] = UNSET
    """Checks for abuse, which includes any requests sent to the API for purposes other than what it is intended for,
    such as high volumes of requests, data scraping, and abuse related to authorization."""

    authorization: Optional[Any] = UNSET
    """Checks to see if you have an authorization policy in place."""


class GoogleCloudApigeeV1ProfileConfigCategoryDict(TypedDict):
    mediation: NotRequired[Any]
    mtls: NotRequired[Any]
    cors: NotRequired[Any]
    threat: NotRequired[Any]
    abuse: NotRequired[Any]
    authorization: NotRequired[Any]
