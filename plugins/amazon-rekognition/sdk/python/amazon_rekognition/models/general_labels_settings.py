from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GeneralLabelsSettings(SdkBaseModel):
    label_inclusion_filters: Optional[list[str]] = Field(default=UNSET, alias="LabelInclusionFilters")
    """The labels that should be included in the return from DetectLabels."""

    label_exclusion_filters: Optional[list[str]] = Field(default=UNSET, alias="LabelExclusionFilters")
    """The labels that should be excluded from the return from DetectLabels."""

    label_category_inclusion_filters: Optional[list[str]] = Field(default=UNSET, alias="LabelCategoryInclusionFilters")
    """The label categories that should be included in the return from DetectLabels."""

    label_category_exclusion_filters: Optional[list[str]] = Field(default=UNSET, alias="LabelCategoryExclusionFilters")
    """The label categories that should be excluded from the return from DetectLabels."""


class GeneralLabelsSettingsDict(TypedDict):
    label_inclusion_filters: NotRequired[list[str]]
    label_exclusion_filters: NotRequired[list[str]]
    label_category_inclusion_filters: NotRequired[list[str]]
    label_category_exclusion_filters: NotRequired[list[str]]
