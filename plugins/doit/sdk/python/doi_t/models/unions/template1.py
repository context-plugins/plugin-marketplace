from __future__ import annotations

from typing import TypeAlias

from ..enums.template import TemplateOrStr

Template1: TypeAlias = TemplateOrStr | list[str]
"""Template type or array of template layer IDs to include."""

Template1Dict: TypeAlias = TemplateOrStr | list[str]
