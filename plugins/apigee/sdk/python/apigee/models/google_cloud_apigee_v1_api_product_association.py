from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1ApiProductAssociation(SdkBaseModel):
    """APIProductAssociation has the API product and its administrative state association."""

    status: Optional[str] = UNSET
    """The API product credential associated status. Valid values are ``approved`` or ``revoked``."""

    apiproduct: Optional[str] = UNSET
    """API product to be associated with the credential."""


class GoogleCloudApigeeV1ApiProductAssociationDict(TypedDict):
    status: NotRequired[str]
    apiproduct: NotRequired[str]
