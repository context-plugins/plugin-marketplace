from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteLanguageModelRequest(SdkBaseModel):
    model_name: str = Field(alias="ModelName")
    """The name of the custom language model you want to delete. Model names are case sensitive."""


class DeleteLanguageModelRequestDict(TypedDict):
    model_name: str
