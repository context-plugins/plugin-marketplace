from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.data_type import DataTypeOrStr
from .source_options import SourceOptions, SourceOptionsDict


class Filters(SdkBaseModel):
    """Filters to narrow down which changes trigger the webhook."""

    source_options: Optional[SourceOptions] = Field(default=UNSET, alias="sourceOptions")
    data_types: Optional[list[DataTypeOrStr]] = Field(default=UNSET, alias="dataTypes")
    """The types of data changes to monitor."""

    record_change_scope: Optional[str] = Field(default=UNSET, alias="recordChangeScope")
    """The scope of record changes to monitor."""

    watch_data_in_field_ids: Optional[list[str]] = Field(default=UNSET, alias="watchDataInFieldIds")
    """Specific field IDs to watch for changes."""

    watch_schemas_of_field_ids: Optional[list[str]] = Field(default=UNSET, alias="watchSchemasOfFieldIds")
    """Specific field IDs whose schema changes to watch."""


class FiltersDict(TypedDict):
    source_options: NotRequired[SourceOptionsDict]
    data_types: NotRequired[list[DataTypeOrStr]]
    record_change_scope: NotRequired[str]
    watch_data_in_field_ids: NotRequired[list[str]]
    watch_schemas_of_field_ids: NotRequired[list[str]]
