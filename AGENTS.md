# Agent Instructions

## Security, secrets, and TypeSafe AI

- Never expose, print, log, commit, or include in diffs, prompts, fixtures, screenshots, or generated artifacts any API key, token, password, credential, private key, session cookie, or other secret. Redact secrets from diagnostics and examples; use placeholders such as `<REDACTED>`.
- Never ask the user to paste a secret into chat. Do not read or display secret-file contents. If a required credential is unavailable, stop and explain how to provide it securely.
- TypeSafe authentication uses `TYPESAFE_API_KEY`, supplied only through the runtime environment or an approved secret manager. The user's local token source is `/home/kkk/.dotfiles/.typesafe.ai/api.token`; do not copy it into this repository, its `.env`/`.envrc`, source code, config, or documentation. Do not assume the variable is available; check presence without printing its value.
- Keep TypeSafe API calls server-side. Never expose `TYPESAFE_API_KEY` to browser/client bundles, public endpoints, or untrusted subprocesses. Do not send sensitive or personal data to TypeSafe unless the user explicitly authorizes that use and the project’s data-handling rules allow it.
- When a task involves TypeSafe, load and follow the installed `typesafe-ai` skill. Consult the live documentation index at https://docs.typesafe.ai/llms.txt and the task-relevant current API/SDK page or cookbook before implementation; do not invent request fields, response shapes, or SDK behavior. Treat skill guidance as a map, not a replacement for current docs.
- Review TypeSafe questions, criteria, thresholds, and uncertainty handling as application logic; validate representative cases and actual behavior. Keep these constants reviewable in one appropriate project location.

---



## Agent skills

TypeSafe and other tool/domain skill references for this repo:

### Issue tracker

Issues live in GitHub Issues (`opengovsg/FormSG`). See `docs/agents/issue-tracker.md`.

### Triage labels

Default canonical labels (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). See `docs/agents/triage-labels.md`.

### Domain docs

Single-context — one `CONTEXT.md` + `docs/adr/` at the repo root. See `docs/agents/domain.md`.

### Review prep

Commit style and breadcrumb convention for review-ready PRs. See `docs/agents/commit-style.md` and `docs/agents/decisions-breadcrumb.md`.
