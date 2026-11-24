from __future__ import annotations

from typing import TypeAlias

Value: TypeAlias = str | bool
"""The value that the option puts in the follow-up prompt. It can differ from ``label``. ``true`` for a checkbox that
stands alone."""

ValueDict: TypeAlias = str | bool
