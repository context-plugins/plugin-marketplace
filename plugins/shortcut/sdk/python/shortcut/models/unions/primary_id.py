from __future__ import annotations

from typing import TypeAlias
from uuid import UUID

PrimaryId: TypeAlias = int | UUID
"""The ID of the primary entity that has changed, if applicable."""

PrimaryIdDict: TypeAlias = int | UUID
