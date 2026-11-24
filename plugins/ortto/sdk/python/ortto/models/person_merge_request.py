from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.find_strategy import FindStrategyOrInt
from .enums.merge_strategy import MergeStrategyOrInt
from .person_input import PersonInput, PersonInputDict


class PersonMergeRequest(SdkBaseModel):
    people: list[PersonInput]
    merge_by: list[str]
    """Up to 3 field IDs used to identify existing records."""

    merge_strategy: Optional[MergeStrategyOrInt] = UNSET
    """1 = append only, 2 = overwrite existing, 3 = ignore."""

    find_strategy: Optional[FindStrategyOrInt] = UNSET
    """0 = any, 1 = sequential, 2 = all."""

    async_: Optional[bool] = Field(default=UNSET, alias="async")
    """Queue processing when true; recommended for large batches."""

    skip_non_existing: Optional[bool] = UNSET
    """When true, only updates existing records."""

    suppression_list_field_id: Optional[str] = UNSET


class PersonMergeRequestDict(TypedDict):
    people: list[PersonInputDict]
    merge_by: list[str]
    merge_strategy: NotRequired[MergeStrategyOrInt]
    find_strategy: NotRequired[FindStrategyOrInt]
    async_: NotRequired[bool]
    skip_non_existing: NotRequired[bool]
    suppression_list_field_id: NotRequired[str]
