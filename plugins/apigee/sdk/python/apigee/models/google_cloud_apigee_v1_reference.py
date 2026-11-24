from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1Reference(SdkBaseModel):
    """A Reference configuration. References must refer to a keystore that also exists in the parent environment."""

    name: Optional[str] = UNSET
    r"""Required. The resource id of this reference. Values must match the regular expression [\w\s\-.]+."""

    description: Optional[str] = UNSET
    """Optional. A human-readable description of this reference."""

    resource_type: Optional[str] = Field(default=UNSET, alias="resourceType")
    """The type of resource referred to by this reference. Valid values are 'KeyStore' or 'TrustStore'."""

    refers: Optional[str] = UNSET
    """Required. The id of the resource to which this reference refers. Must be the id of a resource that exists in the
    parent environment and is of the given resource_type."""


class GoogleCloudApigeeV1ReferenceDict(TypedDict):
    name: NotRequired[str]
    description: NotRequired[str]
    resource_type: NotRequired[str]
    refers: NotRequired[str]
