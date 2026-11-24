from __future__ import annotations

from typing import TypeAlias

from ..user import User, UserDict
from ..user1 import User1, User1Dict
from ..user2 import User2, User2Dict
from ..user3 import User3, User3Dict

User4: TypeAlias = User | User1 | User2 | User3

User4Dict: TypeAlias = UserDict | User1Dict | User2Dict | User3Dict
