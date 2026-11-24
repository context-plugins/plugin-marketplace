from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.chain_stage import ChainStageOrStr
from .enums.status_zillapi_zillow_property_data_jobs_api import StatusZillapiZillowPropertyDataJobsApiOrStr
from .enums.type import TypeOrStr


class Job(SdkBaseModel):
    id: Optional[UUID] = UNSET
    type_: Optional[TypeOrStr] = Field(default=UNSET, alias="type")
    status: Optional[StatusZillapiZillowPropertyDataJobsApiOrStr] = UNSET
    result_count: OptionalNullable[int] = UNSET
    error: OptionalNullable[str] = UNSET
    chain_stage: OptionalNullable[ChainStageOrStr] = UNSET
    """search or detail for chained jobs, null otherwise."""

    created_at: Optional[RFC3339DateTime] = UNSET
    started_at: OptionalNullable[RFC3339DateTime] = UNSET
    completed_at: OptionalNullable[RFC3339DateTime] = UNSET


class JobDict(TypedDict):
    id: NotRequired[UUID]
    type_: NotRequired[TypeOrStr]
    status: NotRequired[StatusZillapiZillowPropertyDataJobsApiOrStr]
    result_count: NotRequired[int | None]
    error: NotRequired[str | None]
    chain_stage: NotRequired[ChainStageOrStr | None]
    created_at: NotRequired[RFC3339DateTime]
    started_at: NotRequired[RFC3339DateTime | None]
    completed_at: NotRequired[RFC3339DateTime | None]
