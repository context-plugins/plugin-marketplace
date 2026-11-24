from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ChangedTablesById(SdkBaseModel):
    changed_records_by_id: Optional[dict[str, Any]] = Field(default=UNSET, alias="changedRecordsById")
    created_records_by_id: Optional[dict[str, Any]] = Field(default=UNSET, alias="createdRecordsById")
    destroyed_record_ids: Optional[list[str]] = Field(default=UNSET, alias="destroyedRecordIds")
    changed_fields_by_id: Optional[dict[str, Any]] = Field(default=UNSET, alias="changedFieldsById")
    created_fields_by_id: Optional[dict[str, Any]] = Field(default=UNSET, alias="createdFieldsById")
    destroyed_field_ids: Optional[list[str]] = Field(default=UNSET, alias="destroyedFieldIds")
    changed_views_by_id: Optional[dict[str, Any]] = Field(default=UNSET, alias="changedViewsById")
    created_views_by_id: Optional[dict[str, Any]] = Field(default=UNSET, alias="createdViewsById")
    destroyed_view_ids: Optional[list[str]] = Field(default=UNSET, alias="destroyedViewIds")


class ChangedTablesByIdDict(TypedDict):
    changed_records_by_id: NotRequired[dict[str, Any]]
    created_records_by_id: NotRequired[dict[str, Any]]
    destroyed_record_ids: NotRequired[list[str]]
    changed_fields_by_id: NotRequired[dict[str, Any]]
    created_fields_by_id: NotRequired[dict[str, Any]]
    destroyed_field_ids: NotRequired[list[str]]
    changed_views_by_id: NotRequired[dict[str, Any]]
    created_views_by_id: NotRequired[dict[str, Any]]
    destroyed_view_ids: NotRequired[list[str]]
