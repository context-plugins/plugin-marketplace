from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Error(SdkBaseModel):
    message: Literal[
        "This campaign has already raised money, and can not be deleted."
    ] = "This campaign has already raised money, and can not be deleted."


class ErrorDict(TypedDict):
    message: Literal["This campaign has already raised money, and can not be deleted."]
