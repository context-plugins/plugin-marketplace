from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.kernel import KernelOrStr


class JupyterConfig2(SdkBaseModel):
    """Optional. Jupyter session config."""

    kernel: Optional[KernelOrStr] = UNSET
    """Optional. Kernel"""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Optional. Display name, shown in the Jupyter kernelspec card."""


class JupyterConfig2Dict(TypedDict):
    kernel: NotRequired[KernelOrStr]
    display_name: NotRequired[str]
