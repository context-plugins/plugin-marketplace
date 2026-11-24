from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.import_status3 import ImportStatus3OrStr
from .enums.merge_strategy import MergeStrategyOrStr
from .import_resource_specification import ImportResourceSpecification, ImportResourceSpecificationDict


class StartImportResponse(SdkBaseModel):
    import_id: Optional[str] = Field(default=UNSET, alias="importId")
    """A unique identifier for the import."""

    resource_specification: Optional[ImportResourceSpecification] = Field(default=UNSET, alias="resourceSpecification")
    merge_strategy: Optional[MergeStrategyOrStr] = Field(default=UNSET, alias="mergeStrategy")
    """The strategy used when there was a name conflict between the imported resource and an existing resource. When the
    merge strategy is FailOnConflict existing resources are not overwritten and the import fails."""

    import_status: Optional[ImportStatus3OrStr] = Field(default=UNSET, alias="importStatus")
    """The current status of the import. When the status is Complete the bot, bot alias, or custom vocabulary is ready
    to use."""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """The date and time that the import request was created."""


class StartImportResponseDict(TypedDict):
    import_id: NotRequired[str]
    resource_specification: NotRequired[ImportResourceSpecificationDict]
    merge_strategy: NotRequired[MergeStrategyOrStr]
    import_status: NotRequired[ImportStatus3OrStr]
    creation_date_time: NotRequired[RFC3339DateTime]
