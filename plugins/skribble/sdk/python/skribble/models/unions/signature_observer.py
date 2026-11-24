from __future__ import annotations

from typing import TypeAlias

from ..group_observer import GroupObserver, GroupObserverDict
from .user_observer import UserObserver, UserObserverDict

SignatureObserver: TypeAlias = UserObserver | GroupObserver
"""Defines an observer target which can either be a USER or a GROUP.

- For type USER, either email or user_id must be provided (but not both). When using email, a user will be automatically
    created if not present and returned.
- For type GROUP, group_id must be provided and no user fields are allowed."""

SignatureObserverDict: TypeAlias = UserObserverDict | GroupObserverDict
