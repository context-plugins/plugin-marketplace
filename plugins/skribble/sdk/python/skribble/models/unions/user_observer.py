from __future__ import annotations

from typing import TypeAlias

from ..user_by_email import UserByEmail, UserByEmailDict
from ..user_by_id import UserById, UserByIdDict

UserObserver: TypeAlias = UserByEmail | UserById

UserObserverDict: TypeAlias = UserByEmailDict | UserByIdDict
