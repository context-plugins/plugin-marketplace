from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Dataset(SdkBaseModel):
    name: str
    size_bytes: float = Field(alias="sizeBytes")
    updated_at: str = Field(alias="updatedAt")


class DatasetDict(TypedDict):
    name: str
    size_bytes: float
    updated_at: str
