from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AudiencePatchAction(SdkBaseModel):
    values: Any
    """An array of values is required for all filters except when the comparator is 'exist' or '!exist'"""

    filter_index: str = Field(alias="filterIndex")


class AudiencePatchActionDict(TypedDict):
    values: Any
    filter_index: str
