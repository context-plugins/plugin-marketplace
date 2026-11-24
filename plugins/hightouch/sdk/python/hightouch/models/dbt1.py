from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Dbt1(SdkBaseModel):
    model_id: float = Field(alias="modelId")
    """Model id that refers to a dbt model"""


class Dbt1Dict(TypedDict):
    model_id: float
