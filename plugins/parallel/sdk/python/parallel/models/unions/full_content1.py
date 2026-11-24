from __future__ import annotations

from typing import TypeAlias

from ..full_content_settings import FullContentSettings, FullContentSettingsDict

FullContent1: TypeAlias = FullContentSettings | bool
"""Controls full content extraction. Set to true to enable with defaults, false to disable, or provide
FullContentSettings for fine-grained control."""

FullContent1Dict: TypeAlias = FullContentSettingsDict | bool
