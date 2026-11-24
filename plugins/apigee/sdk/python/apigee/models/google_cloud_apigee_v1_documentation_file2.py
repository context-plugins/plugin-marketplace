from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1DocumentationFile2(SdkBaseModel):
    """Required. The documentation file contents for the AsyncAPI Specification. JSON and YAML file formats are
    supported."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Required. A display name for the file, shown in the management UI. Max length is 255 characters."""

    contents: Optional[str] = UNSET
    """Required. The file contents. The max size is 4 MB."""


class GoogleCloudApigeeV1DocumentationFile2Dict(TypedDict):
    display_name: NotRequired[str]
    contents: NotRequired[str]
