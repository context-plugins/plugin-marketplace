from __future__ import annotations

from typing import TypeAlias
from uuid import UUID

Id: TypeAlias = int | UUID
"""The ID of the entity referenced."""

IdDict: TypeAlias = int | UUID
