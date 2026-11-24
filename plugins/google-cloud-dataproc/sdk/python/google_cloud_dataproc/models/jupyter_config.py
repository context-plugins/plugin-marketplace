from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.kernel import KernelOrStr


class JupyterConfig(SdkBaseModel):
    """Jupyter configuration for an interactive session."""

    kernel: Optional[KernelOrStr] = UNSET
    """Optional. Kernel"""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Optional. Display name, shown in the Jupyter kernelspec card."""


class JupyterConfigDict(TypedDict):
    kernel: NotRequired[KernelOrStr]
    display_name: NotRequired[str]
