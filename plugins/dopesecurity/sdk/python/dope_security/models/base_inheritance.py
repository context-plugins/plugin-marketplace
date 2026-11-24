from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class BaseInheritance(SdkBaseModel):
    """Signals that settings are inherited from the base policy"""

    inherits_from_base: Literal["True"] = Field(default="True", alias="inheritsFromBase")
    """Always ``true``. Signals that settings are inherited from the base policy."""


class BaseInheritanceDict(TypedDict):
    inherits_from_base: Literal["True"]
