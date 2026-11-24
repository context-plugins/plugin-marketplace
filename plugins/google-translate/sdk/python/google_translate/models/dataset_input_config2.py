from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .input_file import InputFile, InputFileDict


class DatasetInputConfig2(SdkBaseModel):
    """Required. The config for the input content."""

    input_files: Optional[list[InputFile]] = Field(default=UNSET, alias="inputFiles")
    """Files containing the sentence pairs to be imported to the dataset."""


class DatasetInputConfig2Dict(TypedDict):
    input_files: NotRequired[list[InputFileDict]]
