# Public Safety Emergency Response Suite

Wave:
- Portfolio next-20 completion batch

Source candidates represented:
- `AIPublicSafetyEmergencyResponseAssistant`
- `AIPublicSafetyEmergencyResponseOperations`
- `AIPublicSafetyEmergencyResponseAnalytics`
- `AIPublicSafetyEmergencyResponseWorkflow`

This suite is a runnable merged app with one login, one dashboard, one feature-first sidebar, PostgreSQL-backed records/documents/notifications/audit, role behavior, and smoke coverage.

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/public-safety-emergency-response-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:4830`

Seeded users:
- `admin@public-safety-emergency-response.local / admin123`
- `manager@public-safety-emergency-response.local / manager123`
- `analyst@public-safety-emergency-response.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/public-safety-emergency-response-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:4830 npm run smoke
```
