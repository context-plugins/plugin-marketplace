from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .input import Input, InputDict


class ApiV1AutomationsTestRequest(SdkBaseModel):
    input: Optional[Input] = UNSET


class ApiV1AutomationsTestRequestDict(TypedDict):
    input: NotRequired[InputDict]
