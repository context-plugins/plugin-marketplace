from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Production2(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    is_valid: Optional[bool] = UNSET
    """Indicates if the configured branch is valid, that is, if the configured branch actually exists currently. Is
    always ``true`` when ``use_mainbranch`` is ``true`` (even if the main branch does not exist). This field is
    read-only. This field is ignored when updating/creating settings."""

    name: Optional[str] = UNSET
    """The configured branch. It must be ``null`` when ``use_mainbranch`` is ``true``. Otherwise it must be a non-empty
    value. It is possible for the configured branch to not exist (e.g. it was deleted after the settings are set). In
    this case ``is_valid`` will be ``false``. The branch must exist when updating/setting the ``name`` or an error will
    occur."""

    use_mainbranch: Optional[bool] = UNSET
    """Indicates if the setting points at an explicit branch (``false``) or tracks the main branch (``true``). When
    ``true`` the ``name`` must be ``null`` or not provided. When ``false`` the ``name`` must contain a non-empty branch
    name."""

    enabled: Optional[bool] = UNSET
    """Indicates if branch is enabled or not."""


class Production2Dict(TypedDict):
    is_valid: NotRequired[bool]
    name: NotRequired[str]
    use_mainbranch: NotRequired[bool]
    enabled: NotRequired[bool]
