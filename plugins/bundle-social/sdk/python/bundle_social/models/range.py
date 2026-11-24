from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Range(SdkBaseModel):
    start_month: str = Field(alias="startMonth")
    """Month in ``YYYY-MM`` format, inclusive."""

    end_month: str = Field(alias="endMonth")
    """Month in ``YYYY-MM`` format, inclusive."""


class RangeDict(TypedDict):
    start_month: str
    end_month: str
