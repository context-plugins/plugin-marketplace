from __future__ import annotations

from typing import TypeAlias

from ..api_key_spend_limit_detail import ApiKeySpendLimitDetail, ApiKeySpendLimitDetailDict

Detail: TypeAlias = str | ApiKeySpendLimitDetail

DetailDict: TypeAlias = str | ApiKeySpendLimitDetailDict
