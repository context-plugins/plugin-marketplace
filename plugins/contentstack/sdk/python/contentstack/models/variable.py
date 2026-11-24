from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Variable(SdkBaseModel):
    """A reusable configuration variable for use across automations."""

    uid: Optional[str] = UNSET
    """Unique identifier of the variable."""

    name: Optional[str] = UNSET
    """Display name of the variable."""

    key: Optional[str] = UNSET
    """Machine-readable key for referencing the variable in automations."""

    value: Optional[str] = UNSET
    """The value stored in the variable. Sensitive values may be masked."""

    is_secret: Optional[bool] = UNSET
    """Indicates whether the variable value is treated as a secret."""


class VariableDict(TypedDict):
    uid: NotRequired[str]
    name: NotRequired[str]
    key: NotRequired[str]
    value: NotRequired[str]
    is_secret: NotRequired[bool]
