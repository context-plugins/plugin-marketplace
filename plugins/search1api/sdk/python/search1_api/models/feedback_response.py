from __future__ import annotations

from typing import Literal

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class FeedbackResponse(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    id: str
    status: Literal["new"] = "new"


class FeedbackResponseDict(TypedDict):
    id: str
    status: Literal["new"]
