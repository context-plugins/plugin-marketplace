from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1ResourceFile(SdkBaseModel):
    """Metadata about a resource file."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    """Resource file type. {{ resource_file_type }}"""

    name: Optional[str] = UNSET
    """ID of the resource file."""


class GoogleCloudApigeeV1ResourceFileDict(TypedDict):
    type_: NotRequired[str]
    name: NotRequired[str]
