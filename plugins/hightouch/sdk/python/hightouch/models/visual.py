from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Visual(SdkBaseModel):
    """Visual query, used by audience"""

    secondary_label: Optional[str] = Field(default=UNSET, alias="secondaryLabel")
    primary_label: Optional[str] = Field(default=UNSET, alias="primaryLabel")
    filter: Any
    parent_id: float = Field(alias="parentId")
    """Parent id of the schema that visual query is based on"""


class VisualDict(TypedDict):
    secondary_label: NotRequired[str]
    primary_label: NotRequired[str]
    filter: Any
    parent_id: float
