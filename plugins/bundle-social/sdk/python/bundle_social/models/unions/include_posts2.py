from __future__ import annotations

from typing import TypeAlias

from ..enums.include_posts import IncludePostsOrStr
from ..enums.include_posts1 import IncludePosts1OrStr

IncludePosts2: TypeAlias = bool | IncludePostsOrStr | IncludePosts1OrStr

IncludePosts2Dict: TypeAlias = bool | IncludePostsOrStr | IncludePosts1OrStr
