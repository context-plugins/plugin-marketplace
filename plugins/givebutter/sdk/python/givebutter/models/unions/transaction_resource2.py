from __future__ import annotations

from typing import TypeAlias

from ..transaction_resource import TransactionResource, TransactionResourceDict
from ..transaction_resource1 import TransactionResource1, TransactionResource1Dict

TransactionResource2: TypeAlias = TransactionResource | TransactionResource1

TransactionResource2Dict: TypeAlias = TransactionResourceDict | TransactionResource1Dict
