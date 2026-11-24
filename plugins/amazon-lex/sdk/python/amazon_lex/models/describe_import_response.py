from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.import_status1 import ImportStatus1OrStr
from .enums.merge_strategy import MergeStrategyOrStr
from .import_resource_specification import ImportResourceSpecification, ImportResourceSpecificationDict


class DescribeImportResponse(SdkBaseModel):
    import_id: Optional[str] = Field(default=UNSET, alias="importId")
    """The unique identifier of the described import."""

    resource_specification: Optional[ImportResourceSpecification] = Field(default=UNSET, alias="resourceSpecification")
    imported_resource_id: Optional[str] = Field(default=UNSET, alias="importedResourceId")
    """The unique identifier that Amazon Lex assigned to the resource created by the import."""

    imported_resource_name: Optional[str] = Field(default=UNSET, alias="importedResourceName")
    """The name of the imported resource."""

    merge_strategy: Optional[MergeStrategyOrStr] = Field(default=UNSET, alias="mergeStrategy")
    """The strategy used when there was a name conflict between the imported resource and an existing resource. When the
    merge strategy is FailOnConflict existing resources are not overwritten and the import fails."""

    import_status: Optional[ImportStatus1OrStr] = Field(default=UNSET, alias="importStatus")
    """The status of the import process. When the status is Completed the resource is imported and ready for use."""

    failure_reasons: Optional[list[str]] = Field(default=UNSET, alias="failureReasons")
    """If the importStatus field is Failed, this provides one or more reasons for the failure."""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """The date and time that the import was created."""

    last_updated_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdatedDateTime")
    """The date and time that the import was last updated."""


class DescribeImportResponseDict(TypedDict):
    import_id: NotRequired[str]
    resource_specification: NotRequired[ImportResourceSpecificationDict]
    imported_resource_id: NotRequired[str]
    imported_resource_name: NotRequired[str]
    merge_strategy: NotRequired[MergeStrategyOrStr]
    import_status: NotRequired[ImportStatus1OrStr]
    failure_reasons: NotRequired[list[str]]
    creation_date_time: NotRequired[RFC3339DateTime]
    last_updated_date_time: NotRequired[RFC3339DateTime]
