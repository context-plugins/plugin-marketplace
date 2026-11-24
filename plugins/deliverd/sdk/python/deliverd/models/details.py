from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Details(SdkBaseModel):
    expected_version: float = Field(alias="expectedVersion")
    current_version: float = Field(alias="currentVersion")


class DetailsDict(TypedDict):
    expected_version: float
    current_version: float
