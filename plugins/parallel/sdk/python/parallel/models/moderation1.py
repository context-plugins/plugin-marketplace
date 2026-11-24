from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .unions.input1 import Input1, Input1Dict
from .unions.output1 import Output1, Output1Dict


class Moderation1(SdkBaseModel):
    """Moderation results for the request input and generated output, if moderated completions were requested."""

    input: Input1
    output: Output1


class Moderation1Dict(TypedDict):
    input: Input1Dict
    output: Output1Dict
