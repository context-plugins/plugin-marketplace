from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .unions.input import Input, InputDict
from .unions.output import Output, OutputDict


class Moderation(SdkBaseModel):
    """Moderation results for the response input and output, if moderated completions were requested."""

    input: Input
    output: Output


class ModerationDict(TypedDict):
    input: InputDict
    output: OutputDict
