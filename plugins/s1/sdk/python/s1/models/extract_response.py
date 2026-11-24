from __future__ import annotations

from typing import Any, Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .extract_parameters import ExtractParameters, ExtractParametersDict


class ExtractResponse(SdkBaseModel):
    success: Literal["True"] = "True"
    extract_parameters: ExtractParameters = Field(alias="extractParameters")
    results: Any


class ExtractResponseDict(TypedDict):
    success: Literal["True"]
    extract_parameters: ExtractParametersDict
    results: Any
