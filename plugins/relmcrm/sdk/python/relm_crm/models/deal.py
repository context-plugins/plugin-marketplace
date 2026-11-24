from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.object_relm_crm_deals_api import ObjectRelmCrmDealsApiOrStr
from .enums.stage_type import StageTypeOrStr


class Deal(SdkBaseModel):
    id: Optional[str] = UNSET
    object_: Optional[ObjectRelmCrmDealsApiOrStr] = Field(default=UNSET, alias="object")
    title: Optional[str] = UNSET
    value_cents: OptionalNullable[int] = UNSET
    """Integer minor units (cents)."""

    currency: Optional[str] = UNSET
    pipeline: OptionalNullable[str] = UNSET
    """Pipeline KEY. Every deal carries its pipeline - group/filter by (pipeline, stage), never by stage alone (stage
    keys are not unique across pipelines)."""

    pipeline_name: OptionalNullable[str] = UNSET
    """Human display name of the pipeline."""

    stage: OptionalNullable[str] = UNSET
    """Stage KEY within this deal's pipeline."""

    stage_label: OptionalNullable[str] = UNSET
    """Human display label of the stage."""

    stage_type: OptionalNullable[StageTypeOrStr] = UNSET
    """Semantic stage type - use this for won/lost, cross-pipeline, instead of string-matching the key."""

    company_id: OptionalNullable[str] = UNSET
    primary_contact_id: OptionalNullable[str] = UNSET
    close_date: OptionalNullable[str] = UNSET
    custom_fields: Optional[Any] = UNSET
    version: Optional[int] = UNSET
    mode: Optional[str] = UNSET
    created_at: Optional[str] = UNSET
    updated_at: Optional[str] = UNSET
    deleted: Optional[bool] = UNSET


class DealDict(TypedDict):
    id: NotRequired[str]
    object_: NotRequired[ObjectRelmCrmDealsApiOrStr]
    title: NotRequired[str]
    value_cents: NotRequired[int | None]
    currency: NotRequired[str]
    pipeline: NotRequired[str | None]
    pipeline_name: NotRequired[str | None]
    stage: NotRequired[str | None]
    stage_label: NotRequired[str | None]
    stage_type: NotRequired[StageTypeOrStr | None]
    company_id: NotRequired[str | None]
    primary_contact_id: NotRequired[str | None]
    close_date: NotRequired[str | None]
    custom_fields: NotRequired[Any]
    version: NotRequired[int]
    mode: NotRequired[str]
    created_at: NotRequired[str]
    updated_at: NotRequired[str]
    deleted: NotRequired[bool]
