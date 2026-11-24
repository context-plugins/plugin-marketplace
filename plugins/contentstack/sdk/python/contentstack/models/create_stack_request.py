from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .stack2 import Stack2, Stack2Dict


class CreateStackRequest(SdkBaseModel):
    """Parameters for creating a new stack."""

    stack: Stack2


class CreateStackRequestDict(TypedDict):
    stack: Stack2Dict
