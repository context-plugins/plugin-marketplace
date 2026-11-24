from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.merge_strategy2 import MergeStrategy2OrStr
from .import_resource_specification import ImportResourceSpecification, ImportResourceSpecificationDict


class StartImportRequest(SdkBaseModel):
    import_id: str = Field(alias="importId")
    """The unique identifier for the import. It is included in the response from the CreateUploadUrl operation."""

    resource_specification: ImportResourceSpecification = Field(alias="resourceSpecification")
    merge_strategy: MergeStrategy2OrStr = Field(alias="mergeStrategy")
    """The strategy to use when there is a name conflict between the imported resource and an existing resource. When
    the merge strategy is FailOnConflict existing resources are not overwritten and the import fails."""

    file_password: Optional[str] = Field(default=UNSET, alias="filePassword")
    """The password used to encrypt the zip archive that contains the resource definition. You should always encrypt the
    zip archive to protect it during transit between your site and Amazon Lex."""


class StartImportRequestDict(TypedDict):
    import_id: str
    resource_specification: ImportResourceSpecificationDict
    merge_strategy: MergeStrategy2OrStr
    file_password: NotRequired[str]
