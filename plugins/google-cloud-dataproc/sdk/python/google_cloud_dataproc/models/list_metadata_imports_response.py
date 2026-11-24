from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .metadata_import import MetadataImport, MetadataImportDict


class ListMetadataImportsResponse(SdkBaseModel):
    """Response message for DataprocMetastore.ListMetadataImports."""

    unreachable: Optional[list[str]] = UNSET
    """Locations that could not be reached."""

    metadata_imports: Optional[list[MetadataImport]] = Field(default=UNSET, alias="metadataImports")
    """The imports in the specified service."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token that can be sent as page_token to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""


class ListMetadataImportsResponseDict(TypedDict):
    unreachable: NotRequired[list[str]]
    metadata_imports: NotRequired[list[MetadataImportDict]]
    next_page_token: NotRequired[str]
