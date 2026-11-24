from __future__ import annotations

from typing import TypeAlias

from ..atif_content_part import AtifContentPart, AtifContentPartDict

Message: TypeAlias = str | list[AtifContentPart]

MessageDict: TypeAlias = str | list[AtifContentPartDict]
