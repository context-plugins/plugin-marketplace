from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1ReferenceConfig(SdkBaseModel):
    resource_name: Optional[str] = Field(default=UNSET, alias="resourceName")
    """Name of the referenced resource in the following format:
    ``organizations/{org}/environments/{env}/keystores/{keystore}`` Only references to keystore resources are
    supported."""

    name: Optional[str] = UNSET
    """Name of the reference in the following format:
    ``organizations/{org}/environments/{env}/references/{reference}``"""


class GoogleCloudApigeeV1ReferenceConfigDict(TypedDict):
    resource_name: NotRequired[str]
    name: NotRequired[str]
