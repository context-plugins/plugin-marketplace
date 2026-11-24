from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation(SdkBaseModel):
    """Represents a SecurityProfileEnvironmentAssociation resource."""

    name: Optional[str] = UNSET
    """Immutable. The environment ID that the profile is attached to, e.g. ``prod``. This is the bare environment ID,
    not a full resource name; see b/288477507."""

    attach_time: Optional[str] = Field(default=UNSET, alias="attachTime")
    """Output only. The time when environment was attached to the security profile."""

    security_profile_revision_id: Optional[str] = Field(default=UNSET, alias="securityProfileRevisionId")
    """DEPRECATED: DO NOT USE Revision ID of the security profile."""


class GoogleCloudApigeeV1SecurityProfileEnvironmentAssociationDict(TypedDict):
    name: NotRequired[str]
    attach_time: NotRequired[str]
    security_profile_revision_id: NotRequired[str]
