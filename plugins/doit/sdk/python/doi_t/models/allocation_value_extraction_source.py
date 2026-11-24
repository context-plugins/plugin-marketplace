from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.type_doi_t_allocations_api import TypeDoiTAllocationsApiOrStr


class AllocationValueExtractionSource(SdkBaseModel):
    type_: TypeDoiTAllocationsApiOrStr = Field(alias="type")
    """The dimension type to read the value from. Label-map types (label, tag, project_label, system_label, gke_label)
    extract the value of the given key; "fixed" extracts a raw table dimension (for example project_id,
    service_description, region). Derived dimensions such as credits are not extractable."""

    key: str
    """The label/tag key, or the fixed dimension ID, whose value is extracted."""

    providers: OptionalNullable[list[str]] = UNSET
    """Optional cloud providers this source applies to."""


class AllocationValueExtractionSourceDict(TypedDict):
    type_: TypeDoiTAllocationsApiOrStr
    key: str
    providers: NotRequired[list[str] | None]
