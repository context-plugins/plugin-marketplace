from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1DocumentationFile3(SdkBaseModel):
    """Required. The documentation file contents for the OpenAPI Specification. JSON and YAML file formats are
    supported."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Required. A display name for the file, shown in the management UI. Max length is 255 characters."""

    contents: Optional[str] = UNSET
    """Required. The file contents. The max size is 4 MB."""


class GoogleCloudApigeeV1DocumentationFile3Dict(TypedDict):
    display_name: NotRequired[str]
    contents: NotRequired[str]
